class Api::V1::SubmissionsController < ApplicationController
  def index
    submission = Submission.all.order(created_at: :desc)
    render json: submission
  end

  def create
    submission = Submission.create!(submission_params)
    if submission
      render json: submission
    else
      render json: submission.errors
    end
  end


  private

  def submission_params
    params.permit(:firstname, :lastname, :email, :slogan)
  end
end
