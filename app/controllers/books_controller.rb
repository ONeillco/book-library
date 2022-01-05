class BooksController < ApplicationController

def create 
  author = current_user.authors.find_by(id: params[:author_id])
  book = author.books.create(book_params)
  render json: book
end
 

def destroy
  book = Book.find_by(id:params[:id])
  if book
    book.destroy
    head :no_content
  else
    render json: {error:"book Not Found"}, status: :not_found
end
end

private

def book_params 
  params.require(:book).permit( :id, :title, :genre, :author_id )
end

def current_user
  User.find_by( id:session[:user_id])
end

end

