import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { firstNameAtom, lastnameAtom, ageAtom, hobbiesAtom } from '../atoms/user.atom'

const AVAILABLE_HOBBIES = ['Reading', 'Gaming', 'Cooking', 'Traveling']

export default function User() {
  const [firstName, setFirstName] = useAtom(firstNameAtom)
  const [lastName, setLastName] = useAtom(lastnameAtom)
  const [age, setAge] = useAtom(ageAtom)
  const [hobbies, setHobbies] = useAtom(hobbiesAtom)

  const [formFirst, setFormFirst] = useState('')
  const [formLast, setFormLast] = useState('')
  const [formAge, setFormAge] = useState('')
  const [formHobbies, setFormHobbies] = useState<string[]>([])

  function toggleHobby(hobby: string) {
    setFormHobbies(prev =>
      prev.includes(hobby) ? prev.filter(h => h !== hobby) : [...prev, hobby]
    )
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setFirstName(formFirst)
    setLastName(formLast)
    setAge(Number(formAge) || 0)
    setHobbies(formHobbies)
  }

  return (
    <div>
      <div>
        <strong>First name:</strong> <span className="user-value">{firstName}</span>
      </div>
      <div>
        <strong>Last name:</strong> <span className="user-value">{lastName}</span>
      </div>
      <div>
        <strong>Age:</strong> <span className="user-value">{age}</span>
      </div>
      <div>
        <strong>Hobbies:</strong> <span className="user-value">{hobbies.join(', ')}</span>
      </div>

      <hr />

      <form onSubmit={submit}>
        <label>
          First name
          <input value={formFirst} onChange={e => setFormFirst(e.target.value)} />
        </label>
        <label>
          Last name
          <input value={formLast} onChange={e => setFormLast(e.target.value)} />
        </label>
        <label>
          Age
          <input value={formAge} onChange={e => setFormAge(e.target.value)} />
        </label>

        <div>
          <div>Hobbies:</div>
          {AVAILABLE_HOBBIES.map(hobby => (
            <label key={hobby} className="hobby">
              <input
                type="checkbox"
                checked={formHobbies.includes(hobby)}
                onChange={() => toggleHobby(hobby)}
              />
              {hobby}
            </label>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
