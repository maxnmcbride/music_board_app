class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :discussions, through: :comments
     
end
