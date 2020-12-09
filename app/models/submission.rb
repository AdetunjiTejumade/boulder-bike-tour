class Submission < ApplicationRecord
    validates :firstname, :lastname, :email, presence: true
    validates :slogan, presence: true, length: {maximum: 50}
end
