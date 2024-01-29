import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const TalkNowBtn = () => {
    return (
            <Link target='_blank' href={'https://wa.me/923244028456'}>
                <Button variant='default' color='default' className=' cursor-pointer border border-cyan-400 ' size='lg'>Talk Now</Button>
            </Link>
    )
}

export default TalkNowBtn