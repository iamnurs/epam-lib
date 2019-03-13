import { Component } from 'react';

declare module 'react' {
  interface Component {
    public r: <T>(response: object) => T;
    public t: (text: string) => string;
  }
}
