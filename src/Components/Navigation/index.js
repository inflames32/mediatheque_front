const Navigation = () => {
  return (
    <div class="ui secondary  menu">
      <a href="/home" class="item active">
        Home
      </a>
      <a class="item">Messages</a>
      <a class="item">Friends</a>
      <div class="right menu">
        <a class="ui item">Logout</a>
      </div>
    </div>
  );
};
export default Navigation;
