import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { useGetBlog, useUpdateBlog } from 'actions/blogs';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const SingleBlogEditor = ({ user, loading }) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { data: blogData } = useGetBlog(id);
  const [
    updateBlog,
    { data: updatedBlogData, error, loading: updatedLoading },
  ] = useUpdateBlog();
  const update = async (id, data) => {
    try {
      await updateBlog(id, data);
      toast.success('Blog Updated ✔️');
      setTimeout(() => {
        router.push('/blogs');
      }, 1000);
    } catch (error) {
      toast.error('Something went wrong ❗');
    }
  };
  return (
    <BaseLayout user={user} loading={loading}>
      <Head>
        <title>Update Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        {blogData && blogData.content && (
          <Editor
            header="Update Your Blog"
            initialContent={blogData.content}
            loading={updatedLoading}
            onSave={(data) => update(id, data)}
          />
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(SingleBlogEditor)('admin');
