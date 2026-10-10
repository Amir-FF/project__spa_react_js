import ToastList from "../../components/common/ToastList";
import PageTitle from "../../components/common/PageTitle";
import PostForm from "../../components/posts/PostForm";
import { useToasts } from "../../hooks/useToasts";
import { createPost } from "../../services/postService";

const EMPTY_POST = { title: "", body: "" };

const CreatePostPage = () => {
  const { toasts, addToast, removeToast } = useToasts();

  const handleCreate = async (formData) => {
    await createPost(formData);
    addToast("Post created successfully");
  };

  return (
    <>
      <PageTitle>Create Post:</PageTitle>

      <PostForm
        initialValues={EMPTY_POST}
        onSubmit={handleCreate}
        submitLabel="Create Post"
        submittingLabel="Sending..."
        resetOnSuccess
      />

      <ToastList toasts={toasts} onClose={removeToast} />
    </>
  );
};

export default CreatePostPage;
