class CommentsController < ApplicationController
    # have to develop full CRUD capability for users to post, read, edit, and delete comments
    
    def create
        # this is handling the user_id params from the back end
        # instead of from the front end -- this is preferred way to handle
        params[:user_id] = session[:user_id]
        comment = Comment.create!(comments_params)
        render json: comment, status: :created
    end

    # def index
    #     # This will need to show all comments of a specific discussion_id 
    # end

    # def edit or update?
    # end

    # does this need to be changed to destroy?
    
    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else
            render json: {error: "Comment not found"}, status: :not_found
        end
    end


    private
# bouncer in the club checking the jacket analogy
    def comments_params
        params.permit(:post, :user_id, :discussion_id)
    end

# get    '/posts',          to: 'posts#index'   # all posts
# get    '/posts/new',      to: 'posts#new'     # form to create a post
# post   '/posts',          to: 'posts#create'  # create a post from a form submission
# get    '/posts/:id',      to: 'posts#show'    # show a single post
# get    '/posts/:id/edit', to: 'posts#edit'    # form to edit a post
# put    '/posts/:id',      to: 'posts#update'  # for legacy compatibility 
# patch  '/posts/:id',      to: 'posts#update'  # update a post from a form submission
# delete '/posts/:id',      to: 'posts#destroy' # delete a post


# def show
# render json: @current_user
# end

end
