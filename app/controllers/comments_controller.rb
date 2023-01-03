class CommentsController < ApplicationController
    # have to develop full CRUD capability for users to post, read, edit, and delete comments
    
    def create
        comment = Comment.create!(comments_params)
        render json: comment, status: :created
    end

    def index
    end

    # def edit or update?
    # end

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
