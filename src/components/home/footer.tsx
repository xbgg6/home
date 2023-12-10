// footer.tsx
const Footer = () => {
  return (
    <footer>
      <p className="text-center text-slate-600">Copyright &#169; 2023 www.wanghaoyu.com.cn. All Rights Reserved.</p>
      {/* Uncomment the following line if needed */}
      {/* <p className="text-center text-slate-600">工信部备案: <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2020040184号-3</a></p> */}
      <div className="text-center">
        <a href="https://www.netlify.com">
          <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
