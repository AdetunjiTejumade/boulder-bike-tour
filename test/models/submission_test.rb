require 'test_helper'

class SubmissionTest < ActiveSupport::TestCase
  test "should not create a submission without a slogan " do
    submission = Submission.new
    submission.firstname = "Sarah"
    submission.lastname = "Green"
    submission.email = "sarah.green@green.inc"
    assert_not submission.save, "Saved project without slogan"
    end
end
