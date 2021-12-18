class BooksController < ApplicationController
  # before_action :authorize

  def index
    books = current_user.books
    render json: books
  end

  def create
    book = current_user.books.create(book_params)
    if book.valid?
      render json: book
    else
      render json: { errors: book.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def show
    book = current_user.books.find_by(id: params[:id])
    if book
      render json: book
    else
      render json: { error: "Not Found" }, status: :unauthorized
    end
  end

  def destroy
    # binding.pry
     book = current_user.books.find_by(id: params[:id])
    if  book
      book.destroy
      head :no_content
    else
      render json: { error: "Book Not Found" }, status: :not_found
    end
  end

  def update
    book = current_user.books.find_by(id: params[:id])
    if  book
      book.update(book_params) 
      # binding.pry
      render json: book 
      # status: :accepted
      
    else
      render json: {error: "Book Not Found"}, status: :not_found
    end
  end

  private 

  def current_user
    User.find_by(id: session[:user_id])
  end

  def champion_params
    params.permit( :name, :origin, :category )
  end

  def authorize
    return render json: { errors: "Access Denied" }, status: :unauthorized unless session.include? :user_id
  end
end
