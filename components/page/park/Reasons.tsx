import {useTranslations} from 'next-intl'
import {TypographyLarge} from '@/components/typography/TypographyLarge'
import {Accordion, AccordionTrigger, AccordionContent, AccordionItem} from '@/components/ui/Accordion'
import {Rocket, LogOut, Users, Flame, Baby, Heart} from 'lucide-react'

function Reasons() {
  const t = useTranslations('Park.Section3')
  
  return (
    <article>
      <Accordion 
        className='grid sm:grid-cols-2 gap-6 items-start' 
        type='single' 
        collapsible
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <Rocket className='h-4 w-4 mb-[3px] lg:h-6 lg:w-6' />
            <TypographyLarge className='text-base lg:text-lg'>
              {t('Reasons.Reason1.Title')}
            </TypographyLarge>
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            {t('Reasons.Reason1.Content')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            <LogOut className='h-4 w-4 mb-[3px] lg:h-6 lg:w-6' />
            <TypographyLarge className='text-base lg:text-lg'>
              {t('Reasons.Reason2.Title')}
            </TypographyLarge>
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            {t('Reasons.Reason2.Content')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            <Users className='h-4 w-4 mb-[3px] lg:h-6 lg:w-6' />
            <TypographyLarge className='text-base lg:text-lg'>
              {t('Reasons.Reason3.Title')}
            </TypographyLarge>
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            {t('Reasons.Reason3.Content')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>
            <Flame className='h-4 w-4 mb-[3px] lg:h-6 lg:w-6' />
            <TypographyLarge className='text-base lg:text-lg'>
              {t('Reasons.Reason4.Title')}
            </TypographyLarge>
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            {t('Reasons.Reason4.Content')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>
            <Heart className='h-4 w-4 mb-[3px] lg:h-6 lg:w-6' />
            <TypographyLarge className='text-base lg:text-lg'>
              {t('Reasons.Reason5.Title')}
            </TypographyLarge>
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            {t('Reasons.Reason5.Content')}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-6'>
          <AccordionTrigger>
            <Baby className='h-4 w-4 mb-[3px] lg:h-6 lg:w-6' />
            <TypographyLarge className='text-base lg:text-lg'>
              {t('Reasons.Reason6.Title')}
            </TypographyLarge>
          </AccordionTrigger>
          <AccordionContent className='text-base'>
            {t('Reasons.Reason6.Content')}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  )
}

Reasons.displayName = 'Reasons'

export {Reasons}