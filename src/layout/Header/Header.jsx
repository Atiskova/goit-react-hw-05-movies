import { Menu, Link, Container } from "./Header.styled";
import { routes } from "routes";

const menu = [
  { id: "home", name: "home", route: routes.HOME },
  { id: "movies", name: "movies", route: routes.MOVIES },
];

export const Header = () => {
  return (
    <Container>
      <div>
        <nav>
          <Menu>
            {menu &&
              menu.map(({ id, name, route }) => (
                <li key={id}>
                  <Link
                    to={route}
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </Menu>
        </nav>
      </div>
    </Container>
  );
};
