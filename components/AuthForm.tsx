'use client'
import {useState, useCallback} from 'react'
import Card from './Card'
import { signIn } from "@/lib/api"
import Button from './Button'
import Input from './Input'


const initial = {
  email: '',
  password: ''
}
export default function AuthForm() {

  const [formState, setFormState] = useState({...initial})
  return (
    <Card>
}
