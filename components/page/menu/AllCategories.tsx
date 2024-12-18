import * as React from 'react'
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/Card'
import {TypographyP} from '@/components/typography/TypographyP'
import {TypographySmall} from '@/components/typography/TypographySmall'
import {Badge} from '@/components/ui/Badge'
import {Separator} from '@/components/ui/Separator'
import {formatCurrency} from '@/lib/utils'

function AllCategories({categories}: {categories: Category[]}) {
  return categories.map(category => (
    <Card key={category.categoryName}>
      <CardHeader className='p-4 bg-secondary/20 border-b border-b-secondary'>
        <CardTitle className='flex items-center gap-2'>
          {category.categoryIcon}
          <span className='mt-1.5'>{category.categoryName}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='py-6 px-4 space-y-6'>
        {category.categoryProducts.map((entry, i, {length}) => (
          <React.Fragment key={entry.name}>
            <div className='grid grid-cols-[1fr_auto] gap-1'>
              <TypographyP className='font-semibold col-span-1'>
                {entry.name}
              </TypographyP>
              {entry.description && (
                <div className='flex flex-wrap gap-1.5 row-start-2 col-span-2'>
                  {entry.description.map(desc => (
                    <Badge key={desc} variant='secondary' className='text-sm font-semibold'>
                      {desc}
                    </Badge>
                  ))}
                </div>
              )}
              <TypographyP className='font-semibold col-start-2'>
                {formatCurrency(entry.price)}
              </TypographyP>
            </div>

            {i !== length - 1 && <Separator className='bg-secondary/20 col-span-2' />}
          </React.Fragment>
        ))}
      </CardContent>
      {category.categoryNotes && (
        <CardFooter className='p-4 bg-secondary/20 border-t border-t-secondary'>
          <ul className='pl-5 list-disc'>
            {category.categoryNotes.map(note => (
              <li key={note}>
              <TypographySmall className='font-semibold'>
                {note}
              </TypographySmall>
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
    </Card>
  ))
}

AllCategories.displayName = 'AllCategories'

export {AllCategories}