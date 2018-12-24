<template>
  <div id="error">
    <h1>
      ERROR <br />
      <span>Something went wrong. Please reload</span>
    </h1>

  </div>
</template>

<style scoped lang="scss">
#error {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(#fff, 0.3);
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: rgb(202, 60, 60);
    margin: 0;
    font-size: 28px;
    span {
      font-size: 18px;
    }
  }
}
</style>
