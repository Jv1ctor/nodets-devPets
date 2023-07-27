
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

const menuActive = (activeMenu: MenuOptions) => {
  const menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  }

  if(activeMenu !== ''){
    menu[activeMenu] = true
  } 
  return menu
}

export { menuActive }