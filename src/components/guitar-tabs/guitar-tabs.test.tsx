import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import GuitarTabs from './guitar-tabs';
import { makeFakeGuitar } from '../../utils/mocks';

const mockGuitar = makeFakeGuitar();
describe('Компонент: "GuitarTabs"', () => {
  it('корректно отрисовывается компонент', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <GuitarTabs guitar={mockGuitar}/>
      </HistoryRouter>,
    );

    expect(screen.getByText('Характеристики')).toBeInTheDocument();
    expect(screen.getByText('Описание')).toBeInTheDocument();
  });
});
