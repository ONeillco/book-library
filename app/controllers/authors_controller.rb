class AuthorsController < ApplicationController
  # before_action :authorize

  def index
    authors = current_user.authors
    render json: authors
  end

  def create 
    author = current_user.authors.create(author_params)
    if author.valid?
      render json: author
    else
      render json: { errors: author.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def show
    author = current_user.authors.find_by(id: params{:id})
    if author 
      render json: author
    else
    render json: { error: "Not Found" }, status: :unauthorized
  end
end

def destroy
  author = current_user.author.find_by(id: params[:id])
  if author
    author.update(author_params)
    render json: author 
  else
    render json: { error: "Author Not Found"}, status: :not_found
  end
end

private

def current_user
  User.find_by(id: session[:user_id])
end

def author_params
  params.permit( :name, :origin, :category )
end

def authorize
  return render json: { errors: "Access Denied" }, status: :unauthorized unless session.include? :user_id
end
end
