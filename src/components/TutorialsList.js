import React from 'react'
import { usePluginData } from '@docusaurus/useGlobalData'

export default function TutorialsList({ category }) {
  const { categories } = usePluginData('dynamic-tutorials-list');

  return (
    <ul>
      { categories[category].map(tutorial => (
        <li key={tutorial.name}>
          <a href={tutorial.href}>{ tutorial.title }</a>
        </li>
      )) }
    </ul>
  )
}
