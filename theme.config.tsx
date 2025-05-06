import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Yamaswap</span>,
  project: {
    link: 'https://github.com/yamaswap-labs/docs'
  },
  head: function useHead() {
    const config = useConfig();
    const title = `${config.title} – the best DeFAI for ETFs`;
    const description =
      config.frontMatter.description ||
      'YamaSwap allows users to create, manage and trade AI-powered cryptocurrency ETFs, supports Solana & Base, integrates with top tier DEX and powers DeFi investments.';
    const image =
      config.frontMatter.image || 'https://docs.yamaswap.com/og.png';
    return (
      <>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta name='og:image' content={image} />

        <meta name='msapplication-TileColor' content='#fff' />
        <meta httpEquiv='Content-Language' content='en' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </>
    );
  },
  chat: {
    link: 'https://x.com/yamaswap'
  },
  docsRepositoryBase: 'https://github.com/yamaswap-labs/docs',
  footer: {
    content: 'COPYRIGHT © 2025 Yama Labs. ALL RIGHTS RESERVED.'
  }
};

export default config;
