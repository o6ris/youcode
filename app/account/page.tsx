import React from 'react'
import { getAuthSession } from '@/lib/auth'
import UserAccount from '@/components/custom/UserAccount'

async function Account() {
  const session = await getAuthSession();
  const user = session?.user

  return (
    <div>
      <UserAccount user={user} />
    </div>
  )
}

export default Account