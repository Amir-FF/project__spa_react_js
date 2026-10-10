import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ErrorMessage from "../common/ErrorMessage";

const CONTROL_CLASS_NAME = "px-2 py-2 border-secondary-subtle rounded";

/**
 * Title + body form shared by the create and edit pages.
 *
 * @param initialValues  { title, body } used to fill the fields on first render
 * @param onSubmit       async (formData) => void; throw an Error to show it in the form
 * @param submitLabel    button text
 * @param submittingLabel button text while the request is running
 * @param resetOnSuccess clear the fields after a successful submit
 */
const PostForm = ({
  initialValues,
  onSubmit,
  submitLabel,
  submittingLabel,
  resetOnSuccess = false,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // One handler for every field: the input's `name` decides which key changes.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(formData);
      if (resetOnSuccess) setFormData(initialValues);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="col-md-3">
      <Form.Group className="mb-3 shadow-sm" controlId="postTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className={CONTROL_CLASS_NAME}
        />
      </Form.Group>

      <Form.Group className="mb-3 shadow-sm" controlId="postBody">
        <Form.Label>Body:</Form.Label>
        <Form.Control
          name="body"
          as="textarea"
          rows={4}
          value={formData.body}
          onChange={handleChange}
          required
          className={CONTROL_CLASS_NAME}
        />
      </Form.Group>

      {error && <ErrorMessage message={error} />}

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="py-2 px-3 w-100 rounded"
      >
        {isSubmitting ? submittingLabel : submitLabel}
      </Button>
    </Form>
  );
};

export default PostForm;
