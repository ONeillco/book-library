class User < ApplicationRecord
  has_secure_password

  has_many :authors
  has_many :books
end
