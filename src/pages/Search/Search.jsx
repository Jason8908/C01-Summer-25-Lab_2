import styles from './Search.module.css';
import '../../App.css';
import { Autocomplete, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import { ApiService } from '../../services/api';
import { DogCard } from '../../components/DogCard/DogCard';
import generateUniqueId from "generate-unique-id";

export function Search() {
  return (
    <div>
      This is the Search page.
    </div>
  );
}