import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from 'actions/blogs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const BlogEditor = ({ user, loading }) => {
  const router = useRouter();
  const [createBlog, { data: resData, error, loading: resLoading }] =
    useCreateBlog();
  const saveBlog = async (data) => {
    const createdBlog = await createBlog(data);
    toast.success('Blog Created Successfully! ✅');

    setTimeout(() => {
      router.push(`/blogs/editor/${createdBlog._id}`);
    }, 1000);
  };

  if (error) {
    toast.error(error);
  }
  return (
    <BaseLayout user={user} loading={loading}>
      <Head>
        <title>BlogEditor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <Editor onSave={saveBlog} loading={resLoading} />
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)('admin');
