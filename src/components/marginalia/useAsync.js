import React, { useState, useEffect, useCallback } from 'react'

export const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState('idle')
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)
  
    // функция "execute" оборачивает asyncFunction и
    // обрабатывает настройку состояний для pending, value и error
    // useCallback предотвращает вызов useEffect при каждом рендеринге
    // useEffect вызывается только при изменении asyncFunction
    const execute = useCallback(() => {
      setStatus('pending')
      setValue(null)
      setError(null)
  
      return asyncFunction()
        .then(response => {
          setValue(response)
          setStatus('success')
        })
        .catch(error => {
          setError(error)
          setStatus('error')
        })
    }, [asyncFunction])
  
    // вызываем execute для немедленного выполнения
    // с другой стороны, execute может быть вызвана позже
    // например, как обработчик нажатия кнопки
    useEffect(() => {
      if (immediate) {
        execute()
      }
    }, [execute, immediate])
  
    return [execute, status, value, error]
  }

  // ######################uses

  function App() {
    const {execute, status, value, error } = useAsync(myFunction, false)
    
    const getPost = (url) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random() * 10
          random <=5
            ? resolve('Выполнено успешно')
            : reject('Произошла ошибка')
        }, 2000)
      })
    }

    return (
      <div>
        {status === 'idle' && <div>Начните ваше путешествие с нажатия кнопки</div>}
        {status === 'success' && <div>{value}</div>}
        {status === 'error' && <div>{error}</div>}
        <button onClick={execute} disabled={status === 'pending'}>
          {status !== 'pending' ? 'Нажми меня' : 'Загрузка...'}
        </button>
      </div>
    )
  }