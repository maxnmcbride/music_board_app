class User < ApplicationRecord
    has_many :comments
    has_many :discussions, through: :comments 
end
