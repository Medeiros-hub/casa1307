import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from '@chakra-ui/react'
import { Menu as MenIcon } from 'lucide-react'

export function Topbar() {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-9 px-16 py-6 lg:justify-evenly">
        <div className="flex lg:hidden">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Opções"
              icon={<MenIcon />}
              backgroundColor="transparent"
              color="white"
              border="white"
              _expanded={{ bg: 'transparent' }}
              _hover={{ bg: 'white', color: 'black' }}
            />
            <MenuList color="black" border="white">
              <MenuItem>Quem somos</MenuItem>
              <MenuDivider border="1px solid gray" />
              <MenuItem>Orçamento</MenuItem>
              <MenuDivider border="1px solid gray" />
              <MenuItem>Ser um parceiro</MenuItem>
              <MenuDivider border="1px solid gray" />
              <MenuItem>
                <button className="bg-mauve-secondary rounded-lg px-7 py-3 font-medium text-white shadow-shadowButton">
                  Comece de graça
                </button>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <img src="/logo-white.svg" alt="Casa 1307" />

        <div className="hidden flex-1 items-center justify-center gap-6 text-nowrap *:cursor-pointer lg:flex">
          <span>Quem somos</span>
          <span>Orçamento</span>
          <span>Ser um parceiro</span>
        </div>

        <button className="bg-mauve-secondary hidden rounded-lg px-7 py-3 font-medium shadow-shadowButton sm:block">
          Comece de graça
        </button>
      </div>
    </>
  )
}
