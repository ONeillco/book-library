class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :user
  
  has_many :books
end
