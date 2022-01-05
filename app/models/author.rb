class Author < ApplicationRecord
  has_many :books, dependent: :destroy
  belongs_to :user
 
  validates :name, presence: true
end
