class BooksController < ApplicationController
  def index
    render json: Books.all
  end

  def create
    book = Books.create(title: params[:title], author: params[:author])
    book_valid = book.valid?
    if book_valid
      render json: { type: 'Successfully created book list!' }, status: 200
    else
      render json: { message: 'Unable to create book list' }, status: 400
    end
  end

  def show
    puts params[:id]
    render json: Books.find(params[:id])
  end

  def update
    book = Books.find(params[:id])
    book.update(title: params[:title], author: params[:author])
    render json: { type: 'Successfully updated book!' }
  end

  def destroy
    Books.destroy(params[:id])
    render json: { type: 'Book has been deleted!!' }
  end
end
