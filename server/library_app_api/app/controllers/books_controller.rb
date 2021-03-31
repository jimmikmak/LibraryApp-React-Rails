class BooksController < ApplicationController
  def index
    render json: { name: 'index' }
  end

  def create
    render json: { name: 'create' }
  end

  def show
    render json: { name: 'show' }
  end

  def update
    render json: { name: 'update' }
  end

  def destroy
    render json: { name: 'destroy' }
  end
end
