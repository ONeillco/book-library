class BooksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # before_action :authorized

  # def index
  #   books = Book.all
  #   render json: books
  # end

  def index
    if params[:author_id]
      author = current_user.authors.find(params[:author_id])
      books = author.books
    else
      books = Book.all
    end
    render json: books, include: :author
  end

  def show
    book = Book.find_by(id:params[:id])
    if book
      render json: book
    else
      render json: {error: "book Not Found"}, status: :not_found
end
end

# def show
#   author = current_user.authors.find(params[:id])
#   render json: author
# end

# does not work yet
# def create
#   if params[:author_id]
#     author = Author.find(params[:author_id])
#     books = author.books.create(book_params)
#   render json: book, include: :author
#   else
#     render json: { errors: author.errors.full_messages }, status: :unprocessable_entity
# end
# end

# def create
#   if params[:author_id]
#     author = Author.find(params[:author_id])
#     books = author.books.create(book_params)
#   else
#     books = Book.all
#   end
#   render json: books, include: :author
# end

# og below
# def create
#   book = current_author.books.create(book_params)
#   if book.valid?
#   render json: book, status: :created
# else
#   render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
# end
# end


# test for book in nested route  
def create
  book = Book.create(book_params)
  if book.valid?
  render json: book, status: :created
else
  render json: { errors: author.errors.full_messages }, status: :unprocessable_entity
end
end
# Author.find_by(params[:author_id])


def destroy
  book = Book.find_by(id:params[:id])
  if book
    book.destroy
    head :no_content
  else
    render json: {error:"book Not Found"}, status: :not_found
end
end

def update
  book = Book.find_by(id:params[:id])
  if book
    book.update(book_params)
    render json: book, status: :accepted
  else
    render json: {error:"book Not Found"}, status: :not_found
end
end

private

# def book_params
#   params.permit[ :rating]

# end

def book_params 
  params.permit( :id, :title, :genre, :author_id )
end

# def current_user
#   User.find_by(id: session[:user_id])
# end

def current_author
  Author.find_by( params[:id])
end


def render_not_found_response
  render json: { error: "Book not found" }, status: :not_found
end


end

