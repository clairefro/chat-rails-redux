class Api::V1::MessagesController < ApplicationController
  before_action :set_channel
  def index
    @messages = @channel.messages.to_json
  end

  def create
  end

  private

  def set_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end
end
