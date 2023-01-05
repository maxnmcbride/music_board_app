class DiscussionsController < ApplicationController
    # develop full CRUD capabilities for users read, edit, create, and delete discussion boards
    # def show this will bring up a single discussion, but show all comments
    def index
        render json: Discussion.all
    end
end
