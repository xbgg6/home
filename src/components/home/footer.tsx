// footer.tsx
const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', paddingTop: '20px' }}>
      <p className="text-slate-600">Copyright &#169; 2023 www.wanghaoyu.com.cn. All Rights Reserved.</p>
      {/* Uncomment the following line if needed */}
      {/* <p className="text-slate-600">工信部备案: <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2020040184号-3</a></p> */}
        <div>
          <br>
            <a href="https://www.netlify.com">
              <img style={{ display: 'block', margin: 'auto' }} src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" />
            </a>
        </div>
    </footer>
  );
};

export default Footer;
