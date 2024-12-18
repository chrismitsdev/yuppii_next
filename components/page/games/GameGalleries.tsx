'use client'
 
import * as React from 'react'
import {StaticImageData} from 'next/image'
import {Gallery} from 'react-photoswipe-gallery'
import {GalleryImages, options} from '@/components/GalleryImages'
import {buttonVariants} from '@/components/ui/Button'
import {Sheet, SheetTrigger, SheetContent, SheetTitle} from '@/components/ui/Sheet'
import {ScrollArea} from '@/components/ui/ScrollArea'
import {List} from 'lucide-react'
import {cn} from '@/lib/utils'

interface GameGalleriesProps {
  locale: string
  games: Array<Game & {images: StaticImageData[]}> 
}

const GameGalleries = ({locale, games}: GameGalleriesProps) => {
  const [open, setOpen] = React.useState(false)
  const [game, setGame] = React.useState(games[0]?.value)
  
  const getGameProperty = React.useMemo(
    () => games.find(({value}) => value === game),
    [game, games]
  )

  function handleClick(value: string) {
    setGame(value)
    setOpen(false)
  }

  return (
    <article>
      <div className='space-y-6'>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className={buttonVariants({size: 'lg'})}>
            <List />
            <span>
              {locale === 'gr' 
                ? getGameProperty?.value.toLocaleUpperCase('el-GR')
                : getGameProperty?.value
              }
            </span>
          </SheetTrigger>
          <SheetContent side='left' className='w-full sm:max-w-[280px]'>
            <SheetTitle className='p-6'>
              {locale === 'gr' ? 'Επέλεξε παιχνίδι' : 'Choose game'}
            </SheetTitle>
            <ScrollArea className='pl-6 h-[calc(100svh-76px)]' type='always'>
              <ul className='space-y-3'>
                {games.map(({value, label}) => (
                  <li
                    key={value}
                    className={cn(
                      'font-medium cursor-pointer',
                      game === value ? 'font-bold text-accent' : 'text-accent/50'
                    )}
                    onClick={() => handleClick(value)}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        {(game && getGameProperty?.images.length) && (
          <Gallery id={getGameProperty.value} options={options}>
            <div className='grid grid-cols-2 md:grid-cols-[repeat(3,_237px)] justify-between gap-8'>
              <GalleryImages images={getGameProperty?.images} /> 
            </div>
          </Gallery>
        )}
      </div>
    </article>
  )
}

GameGalleries.displayName = 'GameGalleries'

export {GameGalleries}