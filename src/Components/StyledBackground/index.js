import style from './index.module.css';

const StyledBackground = () => {
  return (
    <div style={{ background: 'radial-gradient(#a23982,#1f1013)'}}>
      <div className={`${style.light} ${style.x1}`}></div>
      <div className={`${style.light} ${style.x2}`}></div>
      <div className={`${style.light} ${style.x3}`}></div>
      <div className={`${style.light} ${style.x4}`}></div>
      <div className={`${style.light} ${style.x5}`}></div>
      <div className={`${style.light} ${style.x6}`}></div>
      <div className={`${style.light} ${style.x7}`}></div>
      <div className={`${style.light} ${style.x8}`}></div>
      <div className={`${style.light} ${style.x9}`}></div>
    </div>
  )
}

export default StyledBackground;