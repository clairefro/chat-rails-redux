class Channel < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  has_many :messages, dependent: :destroy
end
