import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {
  messages = [
    { code: '10:00AM EST', name: 'Ishaan K' },
    { code: '11:00AM EST', name: 'Jane Doe' },
    { code: '1:00PM EST', name: 'Katie J' },
    { code: '2:00PM EST', name: 'Ollie M' },
    { code: '2:30PM EST', name: 'Venkatesh K' },
  ];

  value!: string;
  filteredStates = this.messages;

  filter(value: string) {
    if (value) {
      return this.messages.filter(state => state.name.toLowerCase().startsWith(value.toLowerCase()));
    }

    return this.messages;
  }
}
