import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik'

import TextField from '../common/TextField';
import Button from '../common/Button';

import { TodoFormValue } from '../../types';

interface Iprops {
  defaultValue?: TodoFormValue;
  onSubmit: (value: TodoFormValue) => void;
  onCancel: () => void;
}

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`

const ActionButton = styled(Button)`
  width: 48%;
`

export default function TodoForm(props: Iprops) {
  const {
    onSubmit,
    defaultValue = {
      title: '',
      content: '',
      tags: []
    },
    onCancel
  } = props;

  const formik = useFormik({
    initialValues: {
      title: defaultValue.title,
      content: defaultValue.content,
      tag: defaultValue.tags.join(',')
    },
    onSubmit: value => {
      onSubmit({
        title: value.title,
        content: value.content,
        tags: value.tag.split(',')
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
        placeholder="제목을 입력해주세요."
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <TextField
        placeholder="내용을 입력해주세요."
        name="content"
        multiLine={true}
        value={formik.values.content}
        onChange={formik.handleChange}
      />
      <TextField
        placeholder="테그를 입력해주세요.(,로 구분)"
        name="tag"
        value={formik.values.tag}
        onChange={formik.handleChange}
      />
      <Actions>
        <ActionButton color="primary">확인</ActionButton>
        <ActionButton type="button" onClick={() => onCancel()}>취소</ActionButton>
      </Actions>
    </form>
  )
}
