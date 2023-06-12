import css from "./Example8.module.css"
const Example8 = () => {
  return (
    <div className={css.body}>
      <h1 className={css.h1}>Up to 20 hours of battery life — the longest in any Mac ever.</h1>
      <div className={css.buttons}>
        <button id="empty">0%</button>
        <button id="full">100%</button>
      </div>
    </div>
  )
}

export default Example8