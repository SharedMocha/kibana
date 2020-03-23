/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React from 'react';
import { shallowWithIntl } from 'test_utils/enzyme_helpers';
import { ConfirmAlterActiveSpaceModal } from './confirm_alter_active_space_modal';

describe('ConfirmAlterActiveSpaceModal', () => {
  it('renders as expected', () => {
    expect(
      shallowWithIntl(
        <ConfirmAlterActiveSpaceModal.WrappedComponent
          intl={null as any}
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });
});
