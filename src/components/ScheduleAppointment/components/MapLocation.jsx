const MapLocation = ({ className, title, style }) => {
  return (
    <iframe
      className={className}
      title={title}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.970155354489!2d85.28343681442489!3d27.71820773162278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19534ecde4fb%3A0xe7cf4f6dd85b5445!2sBiker&#39;s%20point%20swoyambhu!5e0!3m2!1sen!2snp!4v1677061556803!5m2!1sen!2snp"
      width="600"
      height="450"
      style={style}
      loading="lazy"
    ></iframe>
  );
};

export default MapLocation;
