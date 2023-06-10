import classes from "./CssModules.module.scss";

const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSSモジュールです</p>
      <button className={classes.button}>Css Module</button>
    </div>
  );
};

export default CssModules;
