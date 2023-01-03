class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :discussions, through: :comments
    has_secure_password 
    validates :username, presence: :true
end
