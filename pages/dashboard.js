import Head from 'next/head';
import { useState } from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import withAuth from 'hoc/withAuth';
import { Row, Col, Button } from 'reactstrap';
import MastHead from 'components/shared/MastHead';
import Link from 'next/link';
import Dropdown from 'components/shared/Dropdown';
import { useDeleteBlog, useGetUserBlogs, useUpdateBlog } from 'actions/blogs';
import { toast } from 'react-toastify';

const Dashboard = ({ user, loading }) => {
  const [updateBlog] = useUpdateBlog();
  const { data: blogs, mutate } = useGetUserBlogs();

  const [
    deleteBlog,
    { data: deletedBlog, error: deletedBlogError, loading: deletedBlogLoading },
  ] = useDeleteBlog();

  const changeBlogStatus = async (blogId, status) => {
    try {
      await updateBlog(blogId, { status });
      mutate();
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      if (window.confirm('Are you sure?')) {
        await deleteBlog(blogId);
        toast.success('Blog deleted Successfully');
        mutate();
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const createOption = (blogStatus) => {
    return blogStatus === 'draft'
      ? { view: 'Publish Story', value: 'published' }
      : { view: 'Make a Draft', value: 'draft' };
  };
  const createOptions = (blog) => {
    const option = createOption(blog.status);
    return [
      {
        key: `${blog._id}-published`,
        text: option.view,
        handlers: {
          onClick: () => {
            changeBlogStatus(blog._id, option.value);
          },
        },
      },
      {
        key: `${blog._id}-delete`,
        text: 'Delete',
        handlers: {
          onClick: () => {
            handleDeleteBlog(blog._id);
          },
        },
      },
    ];
  };

  const renderBlogs = (blogs, status) =>
    blogs &&
    blogs.map((blog) => {
      return (
        blog.status === status && (
          <li
            key={blog._id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href={`/blogs/editor/${blog._id}`} passHref>
              <a style={{ textDecoration: 'none' }}>{blog.title}</a>
            </Link>
            <Dropdown items={createOptions(blog)} />
          </li>
        )
      );
    });

  return (
    <BaseLayout navClass="transparent" user={user} loading={false}>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* MASTHEAD */}
      <MastHead imagePath="/images/home-bg.jpg">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Blogs Dashboard</h1>
            <span className="subheading">
              {`Let's write some nice blog today`}{' '}
              <Link href="/blogs/editor" passHref>
                <Button color="primary">Create a new Blog</Button>
              </Link>
            </span>
          </div>
        </div>
      </MastHead>
      {/* MASTHEAD */}
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
            <ul className="user-blogs-list">
              {renderBlogs(blogs, 'published')}
            </ul>
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            <ul className="user-blogs-list">{renderBlogs(blogs, 'draft')}</ul>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Dashboard)('admin');
