const path = require('path');
const Dotenv = require('dotenv-webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
  },
};

module.exports = nextConfig;
