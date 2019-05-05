# React with WordPress

:roller_coaster: React mmenu

## Installation

1. Clone this repo in `https://github.com/imranhsayed/react-mmenu`

2. Run `npm install`


## Commands

- `dev` Runs webpack dev server for development ( in watch mode )
- `prod` Runs webpack in production mode

## Usecase
1. Import the Component and then add the individual menu link items like so : 
`
import MobileMenu from "./MobileMenu";
<MobileMenu>
    { menuData.length && menuData.map( item => (
        <a href={item.url} key={item.label}>{item.label}</a>
    ) ) }
</MobileMenu>
`

- This will create the mmenu for you. 
